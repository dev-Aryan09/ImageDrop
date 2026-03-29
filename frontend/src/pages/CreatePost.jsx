import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, Bounce, Slide } from "react-toastify";
import { Header } from "../components/Header";

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // preventDefault() stops that automatic refresh, so you can handle the submission manually with JavaScript.
    e.preventDefault();

    const formData = new FormData(e.target);

    // this is how we can see what data form will contain in an object
    /*
    console.log(Object.fromEntries(formData.entries()));
    
    console.log(formData.get("image"));
    console.log(formData.get("caption"));
    */

    axios
      .post("https://imagedropp-backend.onrender.com/create-post", formData)
      .then((res) => {
        console.log(res);
        toast.success("Image uploaded successfully!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });
        navigate("/feed");

        e.target.reset(); // form reset
      })
      .catch((err) => {
        console.log(err);
        toast.error("Please upload an image!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  return (
    <>
      <Header />
      <section className="create-post-section">
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>
          <input type="file" name="image" accept="image/*" />
          <input
            type="text"
            name="caption"
            placeholder="Enter caption"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
};

export default CreatePost;
