import "../modalBox/modal.css";

const Modal = ({ isOpen, onClose }) => {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2 >Subcribe</h2>
        <p> Join our newsletter to stay up to date on latest information.</p>
        <div className="contact-us">
          <form>
            <input
              typeof="email"
              placeholder="Enter your email"
              className="contact-form newsfeed-form"
            ></input>
            <button className="subscribe-btn">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
