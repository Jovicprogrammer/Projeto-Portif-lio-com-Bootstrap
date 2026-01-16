

const currentDate: Date = new Date();
const currentYear: number = currentDate.getFullYear();

export default function Footer() {

    return (

        <div className={`block text-center items-center justify-center h-10 pt-10 pb-10`}>

        <p>Créditos imagem de fundo: Pedro Luis Domínguez Ruiz (Pexels)</p>
        <p>Jovic Programmer. {currentYear}</p>


        </div>


    )

}
