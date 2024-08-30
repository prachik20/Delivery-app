const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="p-4 text-2xl font-bold">Contact page</h1>
      <form className="">
        <div>
          <input
            type="text"
            placeholder="Name"
            className="border  m-2  border-black p-2"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Suggestions"
            className="border m-2  border-black p-2"
          />
        </div>

        <button className="p-2 m-2 bg-gray-200 rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
