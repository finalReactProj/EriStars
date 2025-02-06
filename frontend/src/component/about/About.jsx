import "./about.css";
import keyahtiEmbaba from "../../assets/keyahtiEmbaba.jpg";
import maynas from "../../assets/maynas.jpg";
const About = () => {
    return (
      <div className="container">
   <div className="text-center mb-3">
      <h4>Who we are</h4>
    </div>
<div className="row justify-content-around">
    <div className="col-lg-5 ">
      <img className="shamot-y mb-3" src={maynas} alt=""/>
    </div>
    <br/>
      <div className="aboutprg col-12 col-md-7 ">
        <p id="paragraph font-weight-bold ">
          This website is dedicated to all Eritrean music and art stars that are celebrated for their vibrant contributions to the 
          cultural tapestry of the Horn of Africa. Artists like bereket mengisteab , yemane barya , renowned for their powerful voice and emotive 
          performances, and the energetic Yohannes Tikabo, also known as Wedi Tikabo, have captivated audiences 
          with their unique blends of traditional and contemporary sounds. Their music often incorporates 
          elements of Eritrean folk traditions, featuring instruments like the krar and the kebero, 
          while addressing themes of love, patriotism, and social issues. 
          These musicians not only entertain but also play a crucial role in preserving and promoting Eritrea's 
          rich musical heritage globally.  </p>
        </div>
      </div>  
          <p>All the nine ethnic groups possess different musical instruments, beats and rhythms. 
            Through history, music in Eritrea, like many other parts of the world, was confined in regional premises. 
            With the advent of media technology however, the sound of the beats and the ingenuity of folkloric music
             Eritrea possesses started spreading its rhythm to the rest of the country and the region. 
            Although there is no specific time as to when and how music became a part of the Eritrean cultures, 
            it is however definite that the history of music goes as far as centuries when it comes to folkloric 
            music and original cultural rhythms that represent the true identity of the Eritrean cultures.
            
            The one thing which was common between the music from the ages and those sang during the 20th 
            century is that most of the artistic works of music played in Eritrea narrate stories of tribal 
            heroes as well as religious and cultural holidays. The background of music in Eritrea lies deep and 
            goes as far as centuries, but the organized and composed blast of Eritrea’s real musical talent was 
            yet to be unfolded in the late fifties and sixties. 
          </p>  
     
    <div className="row justify-content-between"> 
    
    <div className="aboutprg col-12 col-md-7 ">
    <p>
      Especially with the start of the Eritrean voice of the masses in 1979, all the revolutionary songs made and 
      composed in the terrains of armed resistance front made their way to the ears of the entire Eritrean population. 
      The songs then had no hidden meanings as opposed to those sang from the colonized parts of Eritrea, they were 
      fresh and liberally composed from the freed corners of Eritrea. The valiant freedom fighters had their weapons 
      aimed against the colonizers and the musical front had another weapon that spread messages of freedom and resistance,
       where many fighters as they say had acquired their spirit from.  The best part of the revolutionary music was 
       that the Eritrean Peoples Liberation Front housed all the nine Eritrean ethnic groups under its wings.
        This freedom and bringing together of all citizens for one purpose exposed the untamed riches of beats 
        and rhythms of all cultures. Apart from entertaining the valiant fighters, music during the revolution 
        played a leading role in boosting the will of the perseverant fighters, raised the inclination of the 
        local population to join the armed struggle while on the other hand terrorized and killed the spirit of the enemy.
    </p>
  </div>
    <div className=" col-12 col-md-5">
      <img className="shamot " src={keyahtiEmbaba} alt="eplf band"/>
    </div>
  
  </div>
        <p className="m-3">
          Eritrean literature in the Tigrinya language dates, as far as is known, from the late 19th century 
          but Ge'ez writings have been found in the 4th century BC. It was initially encouraged by European 
          missionaries, but suffered from the general repression of Eritrean culture under Fascist rule in 
          the 1920s and 30s. The earliest published works were primarily translations or collections of
           traditional poems, fables and folktales, but the renaissance of Eritrean culture promoted by 
          the British administrators after 1942 included the appearance of the first novels in Tigrinya.s.
            </p>
            </div>
  )
}

export default About