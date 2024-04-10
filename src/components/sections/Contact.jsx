import { useState, useRef, useCallback, lazy } from 'react';

import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

import { styles } from 'src/styles/styles';
import { withSectionWrapper } from 'src/hoc';
import { slideIn } from 'src/utils/motion';

const EarthCanvas = lazy(() => import('../canvas/Earth'));

const Contact = withSectionWrapper(() => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const formRef = useRef();
    const { t } = useTranslation();

    const handleChange = e => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = useCallback(
        e => {
            e.preventDefault();

            if (!form.name || !form.email || !form.message) {
                alert('Please fill in all fields!');
                return;
            }

            setLoading(true);

            const public_key = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;
            const template_id = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
            const service_id = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;

            emailjs
                .send(
                    service_id,
                    template_id,
                    {
                        from_name: form.name,
                        to_name: 'Kyrylo Ulianov',
                        from_email: form.email,
                        to_email: 'ulyak.work@gmail.com',
                        message: form.message,
                    },
                    public_key,
                )
                .then(
                    () => {
                        setLoading(false);
                        alert('Thank u so much)');
                        setForm({ name: '', email: '', message: '' });
                    },
                    error => {
                        setLoading(false);
                        console.log(error);
                        alert('Something went wrong!');
                    },
                );
        },
        [form.name, form.email, form.message],
    );

    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p className={styles.sectionSubText}>{t('contact.subtitle')}</p>
                <h3 className={styles.sectionHeadText}>{t('contact.title')}</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8"
                >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            {t('contact.form.fields.0.label')}
                        </span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder={t('contact.form.fields.0.placeholder')}
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            {t('contact.form.fields.1.label')}
                        </span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder={t('contact.form.fields.1.placeholder')}
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            {t('contact.form.fields.2.label')}
                        </span>
                        <textarea
                            name="message"
                            rows="7"
                            value={form.message}
                            onChange={handleChange}
                            placeholder={t('contact.form.fields.2.placeholder')}
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium resize-none"
                        />
                    </label>

                    <button
                        type="submit"
                        className="btn bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
                        disabled={loading}
                    >
                        {loading
                            ? t('contact.form.button.loading')
                            : t('contact.form.button.text')}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
}, 'contact');

export default Contact;
