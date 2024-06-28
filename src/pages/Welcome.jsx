import welcomeImage from "../assets/images/welcome-image.png"

export default function Welcome() {
    return (

        <div className="bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url('./assets/images/welcome-background.png')] bg-cover bg-center h-screen flex flex-col justify-center">
            <h3 className="text-white text-center text-align text-4xl">Savory & Sweets</h3>
            <img classNamae=""  src={welcomeImage} alt="welcomeimage" />
        </div>
    );
}