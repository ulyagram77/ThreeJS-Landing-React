import { Html, useProgress } from '@react-three/drei';

const styles = {
    fontSize: 14,
    color: '#f1f1f1',
    fontWeight: 800,
    marginTop: 40,
};

const CanvasLoader = () => {
    const { progress } = useProgress();
    return (
        <Html>
            <span className="canvas-load"></span>
            <p style={styles}>{progress.toFixed(2)}%</p>
        </Html>
    );
};

export default CanvasLoader;
