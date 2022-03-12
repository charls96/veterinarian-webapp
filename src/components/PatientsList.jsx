import Patients from "./Patients";

const PatientsList = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="text-3xl text-center font-black">Patients List</h2>
      <p className="text-lg text-center mt-5 mb-10">
        Manage your{" "}
        <span className="text-indigo-600 font-bold">Patients and Dates</span>
      </p>

      <Patients />
      <Patients />
      <Patients />
      <Patients />
      <Patients />
      <Patients />
      <Patients />
    </div>
  );
};

export default PatientsList;
