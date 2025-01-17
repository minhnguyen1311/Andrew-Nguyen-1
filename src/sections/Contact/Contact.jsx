import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
        <h1 className="sectionTitle"> Contact </h1>
        
        <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="3857e2fa-d17b-4ae3-aaab-b65fa623c256"/>

            <div className="formGroup">
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required
                />
            </div>
            <div className="formGroup">
                <label htmlFor="email" hidden>
                    Email
                </label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                />
            </div>
            <div className="formGroup">
                <label htmlFor="message" hidden>
                    Message
                </label>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    required></textarea>
            </div>
            <input className="hover btn" type="submit" value="Submit" />
        </form>
    </section>
  );
}

export default Contact;