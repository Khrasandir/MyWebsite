import CircleLoader from 'react-spinners/CircleLoader';

const Spinner = () => {
  return (
    <div className="loader">
      <CircleLoader
        color={'#7e008a'}
        size={150}
      />
    </div>
  );
};

export default Spinner;
