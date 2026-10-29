import Image from 'next/image'

const AboutPage = () => {
  return (
    <section className="content">
      <h2 className="section-title">About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti itaque exercitationem pariatur mollitia iusto
        et blanditiis. Quae sequi reprehenderit dolorum repudiandae quas rem quam error, id quidem! Accusamus nihil eos,
        quod cum ad alias laborum itaque architecto corporis debitis aspernatur.
      </p>
      {/* <img src="./1200x900.webp" alt="blue car" /> */}

      <Image src="/1200x900.webp" alt="blue car" width="600" height="450" priority />
      <br />
      <Image src="/1200x900.webp" alt="blue car" width="600" height="450" priority />
    </section>
  )
}

export default AboutPage
