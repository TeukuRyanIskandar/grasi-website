import Header from "../components/Header";

const Contact = () => {
    return (
        <div className="contact-container">
            <Header
                headerTitle="Let's Build Something Beautiful"
                headerDesc={
                    [
                        "Join hands with us in creating a better future",
                        "Each kid deserve the chance to learn and grow. Have an idea you want to pitch? A suggestion? We welcome all hands that are willing to help",
                        "You can also email us at 'email'"
                    ]
                }
            />
        </div>
    )
}

export default Contact;