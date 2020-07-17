import Head from 'next/head'
import Layout from '../components/Layout.js'

export default () => {
  return (
    <Layout>
      <Head>
        <title>Launch Tech LLC - About Us</title>
        <meta name="description" content="Welcome the Launch Tech LLC team, along with our advisors! Get to know the people that create, build, market, and deploy all of Launch Tech's SaaS products and software applications!" />
      </Head>

      <div className="waves">
        <div className="waves-container">
          <div className="container">
            <h1 className="section-header">About us</h1>
          </div>
        </div>
        <img src="img/waves/nav-wave.png" className="flipped-wave wave" />
      </div>

      <section className="about-us">
        <div className="page-container container">
          <h1>Our Team</h1>
          <div className="persons mt-3">
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img src="img/people/calix.png" alt="Launch Tech LLC - Calix Huang - Founder and CEO" className="person-image" />
              </div>
              <div className="person-content">
                <div className="person-info">
                  <div>
                    <h3 className="person-name">Calix Huang</h3>
                  </div>
                  <div className="person-info-links">
                    <a href="https://www.instagram.com/calix_huang/" target="_blank">
                      <img src="img/icons/social-media/instagram-dark.svg" />
                    </a>
                    <a href="https://www.linkedin.com/in/calix-huang/" target="_blank">
                      <img src="img/icons/social-media/linkedin-dark.svg" />
                    </a>
                    <a href="mailto:calix@launchtechllc.com" target="_blank">
                      <img src="img/icons/contact/email-dark.svg" />
                    </a>
                  </div>
                </div>
                <p className="person-title">Founder</p>
                <small className="person-description">
                  Calix Huang is a self-taught software engineer who specializes in full-stack development and is employed by multiple SaaS companies. After delivering many influential speeches several major hackathons, his goal is to create his own successful SaaS company.
                </small>
              </div>
            </div>
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img src="img/people/kenny.png" alt="Launch Tech LLC - Kenny Wu - COO" className="person-image" />
              </div>
              <div className="person-content">
                <div className="person-info">
                  <div>
                    <h3 className="person-name">Kenny Wu</h3>
                  </div>
                  <div className="person-info-links">
                    <a href="https://www.instagram.com/kenny.wu/" target="_blank">
                      <img src="img/icons/social-media/instagram-dark.svg" />
                    </a>
                    <a href="https://www.linkedin.com/in/kennywuconnect/" target="_blank">
                      <img src="img/icons/social-media/linkedin-dark.svg" />
                    </a>
                    <a href="mailto:kenny@launchtechllc.com" target="_blank">
                      <img src="img/icons/contact/email-dark.svg" />
                    </a>
                  </div>
                </div>
                <p className="person-title">Chief Operating Officer</p>
                <small className="person-description">
                  Kenny Wu is an operations executive and marketing specialist. He is highly involved with the entrepreneurship community and excels in planning and implementing business operations. On the side, he loves to cook, write articles, and play sports with friends.
                </small>
              </div>
            </div>
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img src="img/people/neha.png" alt="Launch Tech LLC - Neha Washikar" className="person-image" />
              </div>
              <div className="person-content">
                <div className="person-info">
                  <div>
                    <h3 className="person-name">Neha Washikar</h3>
                  </div>
                  <div className="person-info-links">
                    <div></div>
                    <a href="https://www.linkedin.com/in/nehawashikar/" target="_blank">
                      <img src="img/icons/social-media/linkedin-dark.svg" />
                    </a>
                    <a href="mailto:neha@launchtechllc.com" target="_blank">
                      <img src="img/icons/contact/email-dark.svg" />
                    </a>
                  </div>
                </div>
                <p className="person-title">Chief Marketing Officer</p>
                <small className="person-description">
                  Neha Washikar works with the Outreach/ Social Media team in Launch Tech. She is currently the Vice President of Digital Marketing at her school’s DECA chapter, and was the Director of Outreach last year. In her free time, Neha enjoys playing volleyball and painting.
                </small>
              </div>
            </div>
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img src="img/people/adelyn.png" alt="Launch Tech LLC - Adelyn Chen" className="person-image" />
              </div>
              <div className="person-content">
                <div className="person-info">
                  <div>
                    <h3 className="person-name">Adelyn Chen</h3>
                  </div>
                  <div className="person-info-links">
                    <div></div>
                    <a href="https://www.linkedin.com/in/adelynchen/" target="_blank">
                      <img src="img/icons/social-media/linkedin-dark.svg" />
                    </a>
                    <a href="mailto:adelyn@launchtechllc.com" target="_blank">
                      <img src="img/icons/contact/email-dark.svg" />
                    </a>
                  </div>
                </div>
                <p className="person-title">Director of Outreach</p>
                <small className="person-description">
                  Adelyn Chen is a student at the Wharton School and works on Launch Tech's outreach team. She loves navigating the intersection of business and computer science. Her hobbies are calligraphy, bullet journaling, drinking bubble tea, and watching Korean dramas.
                </small>
              </div>
            </div>
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img src="img/people/jasmine.png" alt="Launch Tech LLC - Jasmine Cho" className="person-image" />
              </div>
              <div className="person-content">
                <div className="person-info">
                  <div>
                    <h3 className="person-name">Jasmine Cho</h3>
                  </div>
                  <div className="person-info-links">
                    <div></div>
                    <a href="https://www.linkedin.com/in/eunsuh-jasmine-cho-408874166/" target="_blank">
                      <img src="img/icons/social-media/linkedin-dark.svg" />
                    </a>
                    <a href="mailto:jasmine@launchtechllc.com" target="_blank">
                      <img src="img/icons/contact/email-dark.svg" />
                    </a>
                  </div>
                </div>
                <p className="person-title">Graphic Design</p>
                <small className="person-description">
                  Jasmine Cho is a prospective computer science major, and is currently the team captain of her Varsity tennis team and the Concertmaster for the Symphony Orchestra. Aside from academics, you can find her food adventuring, paddle boarding or hiking.
                </small>
              </div>
            </div>
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img src="img/people/mitchell.png" alt="Launch Tech LLC - Mitchell Artz" className="person-image" />
              </div>
              <div className="person-content">
                <div className="person-info">
                  <div>
                    <h3 className="person-name">Mitchell Artz</h3>
                  </div>
                  <div className="person-info-links">
                    <div></div>
                    <a href="https://www.linkedin.com/in/mitchellartz/" target="_blank">
                      <img src="img/icons/social-media/linkedin-dark.svg" />
                    </a>
                    <a href="mailto:mitchell@launchtechllc.com" target="_blank">
                      <img src="img/icons/contact/email-dark.svg" />
                    </a>
                  </div>
                </div>
                <p className="person-title">Lead QA Tester</p>
                <small className="person-description">
                Mitchell Artz is a QA tester and security enthusiast, currently studying to get his High School diploma online. He loves testing for security flaws in cloud-based services. Mitchell enjoys playing curling and flying drones.
                </small>
              </div>
            </div>
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img src="img/people/jinhao.png" alt="Launch Tech LLC - Jinhao Xie" className="person-image" />
              </div>
              <div className="person-content">
                <div className="person-info">
                  <div>
                    <h3 className="person-name">Jinhao Xie</h3>
                  </div>
                  <div className="person-info-links">
                    <div></div>
                    <a href="https://www.linkedin.com/in/jinhaoxie/" target="_blank">
                      <img src="img/icons/social-media/linkedin-dark.svg" />
                    </a>
                    <a href="mailto:jinhao@launchtechllc.com" target="_blank">
                      <img src="img/icons/contact/email-dark.svg" />
                    </a>
                  </div>
                </div>
                <p className="person-title">Software Engineer</p>
                <small className="person-description">
                Jinhao Xie is a HS student in Toronto working on developing Launch Tech's software products. He enjoys listening to music, playing basketball, and gaming on occasion. He hopes to pursue a degree computer science and eventually work in software/web development.
                </small>
              </div>
            </div>
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img src="img/people/angela.png" alt="Launch Tech LLC - Angela Chen" className="person-image" />
              </div>
              <div className="person-content">
                <div className="person-info">
                  <div>
                    <h3 className="person-name">Angela Chen</h3>
                  </div>
                  <div className="person-info-links">
                    <div></div>
                    <a href="https://www.linkedin.com/in/angela-chen-8235521a9/" target="_blank">
                      <img src="img/icons/social-media/linkedin-dark.svg" />
                    </a>
                    <a href="mailto:angela@launchtechllc.com" target="_blank">
                      <img src="img/icons/contact/email-dark.svg" />
                    </a>
                  </div>
                </div>
                <p className="person-title">QA Tester</p>
                <small className="person-description">
                  Angela Chen is the Outreach Coordinator at Project Tech Conferences, a student NPO that runs technology events for students, and hopes to further her own programming knowledge. In her free time, Angela enjoys running, hurdling and listening to music.
                </small>
              </div>
            </div>
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img src="img/people/rex.png" alt="Launch Tech LLC - Rex Liu" className="person-image" />
              </div>
              <div className="person-content">
                <div className="person-info">
                  <div>
                    <h3 className="person-name">Rex Liu</h3>
                  </div>
                  <div className="person-info-links">
                    <div></div>
                    <a href="https://www.linkedin.com/in/rexliu3/" target="_blank">
                      <img src="img/icons/social-media/linkedin-dark.svg" />
                    </a>
                    <a href="mailto:rex@launchtechllc.com" target="_blank">
                      <img src="img/icons/contact/email-dark.svg" />
                    </a>
                  </div>
                </div>
                <p className="person-title">QA Tester</p>
                <small className="person-description">
                  Rex Liu is an independent software engineer developing web and mobile applications for clients and creating personal projects to dive deeper into the world of CS. He is also an avid badminton and tennis player.
                </small>
              </div>
            </div>
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img src="img/people/molly.png" alt="Launch Tech LLC - Molly Xu" className="person-image" />
              </div>
              <div className="person-content">
                <div className="person-info">
                  <div>
                    <h3 className="person-name">Molly Xu</h3>
                  </div>
                  <div className="person-info-links">
                    <div></div>
                    <a href="https://www.linkedin.com/in/mollyxu9/" target="_blank">
                      <img src="img/icons/social-media/linkedin-dark.svg" />
                    </a>
                    <a href="mailto:neha@launchtechllc.com" target="_blank">
                      <img src="img/icons/contact/email-dark.svg" />
                    </a>
                  </div>
                </div>
                <p className="person-title">QA Tester</p>
                <small className="person-description">
                  Molly is a prospective Computer Science and Business Administration double degree student at the University of Waterloo. When she isn’t coding, you can find her listening to Latin pop or binge-watching La Casa de Papel (Money Heist).
                </small>
              </div>
            </div>
                        <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img src="img/people/jaanavi.png" alt="Launch Tech LLC - Jaanavi Thanamala" className="person-image" />
              </div>
              <div className="person-content">
                <div className="person-info">
                  <div>
                    <h3 className="person-name">Jaanavi Thanamala</h3>
                  </div>
                  <div className="person-info-links">
                    <div></div>
                    <a href="https://www.linkedin.com/in/jaanavi-thanamala" target="_blank">
                      <img src="img/icons/social-media/linkedin-dark.svg" />
                    </a>
                    <a href="mailto:jaanavi.thanamala@gmail.com" target="_blank">
                      <img src="img/icons/contact/email-dark.svg" />
                    </a>
                </div>
                <p className="person-title">Outreach</p>
              </div>
                <small className="person-description">
                  Jaanavi Thanamala is a business management and information science enthusiast. She is highly involved in her community and loves learning about tech + entrepreneurship. In her free time, Jaanavi loves to spend time with friends, bike, and binge Netflix shows.
                </small>
            </div>
            </div>
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img src="img/people/elizabeth.png" alt="Launch Tech LLC - Elizabeth Field" className="person-image" />
              </div>
              <div className="person-content">
                <div className="person-info">
                  <div>
                    <h3 className="person-name">Elizabeth Field</h3>
                  </div>
                  <div className="person-info-links">
                    <div></div>
                    <div></div>
                    <a href="mailto:elizabeth@launchtechllc.com" target="_blank">
                      <img src="img/icons/contact/email-dark.svg" />
                    </a>
                  </div>
                </div>
                <p className="person-title">Content Writer</p>
                <small className="person-description">
                  Elizabeth Field is a rising senior at Monticello High School in Virginia. She is an inspiring physicist, with passions in mathematical theory, writing/journalism, music, international politics, athletics, community service, research worm holes, and watching Netflix.
                </small>
              </div>
            </div>
            <div className="person" data-aos="zoom-in">
            <div className="image-cropper">
               <img src="img/people/katie.png" alt="Launch Tech LLC - Katie Li" className="person-image" />
            </div>
            <div className="person-content">
               <div className="person-info">
                  <div>
                     <h3 className="person-name">Katie Li</h3>
                  </div>
                  <div className="person-info-links">
                     <div></div>
                     <a href="https://www.linkedin.com/in/katieyli/" target="_blank">
                     <img src="img/icons/social-media/linkedin-dark.svg" />
                     </a>
                     <a href="mailto:katie@launchtechllc.com" target="_blank">
                     <img src="img/icons/contact/email-dark.svg" />
                     </a>
                  </div>
               </div>
               <p className="person-title">Content Writer</p>
               <small className="person-description">
               Katie Li is a content writer for Launch Tech who’s interested in exploring the intersection between writing and computer science. In her free time, she also loves to read, dance, and waste money on boba.
               </small>
            </div>
</div>
</div>

          <h1 className="mt-5">Advisors</h1>
          <div className="advisors persons mt-3">
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img src="img/people/jack.png" alt="Launch Tech LLC - Jack Chen" className="person-image" />
              </div>
              <div className="person-content">
                <h3 className="person-name">Jack Chen</h3>
                <p className="person-title">Software Engineer @ Box</p>
              </div>
            </div>
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img src="img/people/nathaniel.png" alt="Launch Tech LLC - Nathaniel Diong" className="person-image" />
              </div>
              <div className="person-content">
                <h3 className="person-name">Nathaniel Diong</h3>
                <p className="person-title">Founder @ Future Minds Network</p>
              </div>
            </div>
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img src="img/people/chinmayi.png" alt="Launch Tech LLC - Chinmayi Balusu" className="person-image" />
              </div>
              <div className="person-content">
                <h3 className="person-name">Chinmayi Balusu</h3>
                <p className="person-title">Founder + CEO @ Simply Neuroscience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
