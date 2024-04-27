import { PuffLoader } from 'react-spinners';

const styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

const Preloader = () => {
    return (
        <div style={styles}>
            <PuffLoader color="#FFDE59" size={200} />
        </div>
    );
};

export default Preloader;
