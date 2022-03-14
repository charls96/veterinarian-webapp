const Patient = ({patient}) => {
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
    </div>
  );
};

export default Patient;
