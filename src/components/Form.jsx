const Form = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Patients Tracking</h2>

      <p className="mt-5 text-lg text-center mb-10">
        Add Patients and{" "}
        <span className="text-indigo-600 font-bold">Manage Them</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" action="">
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="pet-name">Pet Name</label>
          <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Name of the pet" id="pet-name" />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="owner">Owner Name</label>
          <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Name of the owner" id="owner" />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="owner">Email</label>
          <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="email" placeholder="Contact owner email" id="email" />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="register-date">Register Date</label>
          <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="date" id="register-date" />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="symptoms">Symptoms</label>
          <textarea className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe the symptoms" id="symptoms" />
        </div>
        <input className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer rounded transition-all" type="submit" value="Add Patient" />
      </form>
    </div>
  );
};

export default Form;
