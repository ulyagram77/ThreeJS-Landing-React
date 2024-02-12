import { error } from 'src/assets';

const ErrorMessage = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <img
                src={error}
                alt="Error"
                className="w-[150px] h-[150px] object-contain sm:"
            />
            <h2 className="text-white font-bold text-[16px] sm:text-[24px]">
                Sorry! Something went wrong...
            </h2>
        </div>
    );
};

export default ErrorMessage;
