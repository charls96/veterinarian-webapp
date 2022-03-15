const Patient = ({patient, setPatient}) => {
  const {petName, ownerName, email, registerDate, symptoms} = patient;
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Name: {""}
        <span className="font-normal normal-case">{petName}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Owner: {""}
        <span className="font-normal normal-case">{ownerName}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Register date: {""}
        <span className="font-normal normal-case">{registerDate}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        symptoms: {""}
        <span className="font-normal normal-case">
          {symptoms}
        </span>
      </p>
      <div className="flex gap-3 mt-10">
        <button 
        type="button"
        className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
        onClick={() => setPatient(patient)}>
          Edit
        </button>
        <button 
        type="button"
        className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Patient;
