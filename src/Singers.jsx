import Singer from "./Singer";

const Singers = () => {

    const singers = ['Udit Narayan', 'Arijit Singh', 'Mohammad Rafi', 'Kumar Sanu', 'Ariana Grande'];

    return (
        <div>
            <h1>SINGERS</h1>
            <div style={{
                border:"2px solid tomato",
                padding: '20px',
                borderRadius: '12px',
            }}>
            {
                singers.map(singer =><Singer name={singer}></Singer>)
            }
            </div>
        </div>
    );
};

export default Singers;