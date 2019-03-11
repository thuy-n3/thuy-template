<div className="ui items contactInfoContainer">

    <div className="item mailCircle">
      <div className="ui circular big medium icon button">
        <i className="envelope open outline icon"></i>
      </div>
    </div>  
    <div className="content mail">
      <div class="header">
        <a href="mailto:contactme@rgdeveloper.com" className="email description">contactme@rgdeveloper.com</a>
      </div>
    </div>

    <div className="item phoneCircle">
      <div className="ui circular big medium icon button">
        <i className="mobile alternate icon"></i>
      </div>
    </div>
    <div className="content phone">
      <div class="header">
        <div className="phone">555-555-5555</div>
      </div>
    </div>

</div>




  <div className="contactInfoContainer ui large list">
    <div className="mailCircle item">
      <div className="ui circular big medium icon button">
        <i className="envelope open outline icon"></i>
      </div>
      <div className="mail content">
        <a href="mailto:contactme@rgdeveloper.com" className="email description">contactme@rgdeveloper.com</a>
      </div>
    </div>
    <div className="phoneCircle item">
      <div className="ui circular big medium icon button">
        <i className="mobile alternate icon"></i>
      </div>
      <div className="phone content">
        <div className="phone">555-555-5555</div>
      </div>
    </div>
  </div>







<div className="contactInfoContainer ui large list">
  <div className="mailCircle item">
    <div className="ui circular big medium icon button">
      <i className="envelope open outline icon"></i>
    </div>
    <div className="email content">
      <a href="mailto:contactme@rgdeveloper.com" className="email description">contactme@rgdeveloper.com</a>
    </div>
  </div>
  <div className="phoneCircle item">
    <div className="ui circular big medium icon button">
      <i className="mobile alternate icon"></i>
    </div>
    <div className="phone content">
      <div className="phone">555-555-5555</div>
    </div>
  </div>
</div>


<div className="ui items">
  <div className="item email">
    <div className="ui circular big medium icon button">
      <i className="envelope open outline icon"></i>
    </div>
    <div className="email content">
      <a href="mailto:contactme@rgdeveloper.com" className="email description">contactme@rgdeveloper.com</a>
    </div>
  </div>
  <div className="item phone">
    <div className="ui circular big medium icon button">
      <i className="mobile alternate icon"></i>
    </div>
    <div className="phone content">
      <div className="phone">555-555-5555</div>
    </div>
  </div>
</div>



<div className="ui items">
  <div className="item email">
    <div className="ui circular big medium icon button">
      <i className="envelope open outline icon"></i>
    </div>
    <div className="email content">
      <a href="mailto:contactme@rgdeveloper.com" className="email description">contactme@rgdeveloper.com</a>
    </div>
  </div>
  <div className="item phone">
    <div className="ui circular big medium icon button">
      <i className="mobile alternate icon"></i>
    </div>
    <div className="phone content">
      <div className="phone">555-555-5555</div>
    </div>
  </div>
</div>


<div className="ui labeled button">
  <div className="ui button">
    <i classNmae="mobile alternate icon"></i>
    </div>
    <div className="ui basic right pointing label">555-555-5555</div>
  </div>


<button class="ui labeled icon button">
  <i class="mobile alternate icon"></i>
  555-555-5555
</button>





<div className="ui items">
  <div className="item email">
    <div className="ui circular big medium icon button">
      <i className="envelope open outline icon"></i>
    </div>
    <div className="email content">
      <a href="mailto:contactme@rgdeveloper.com" className="email description">contactme@rgdeveloper.com</a>
    </div>
  </div>
  <div className="item phone">
    <div className="ui circular big medium icon button">
      <i className="mobile alternate icon"></i>
    </div>
    <div className="phone content">
      <div className="phone">555-555-5555</div>
    </div>
  </div>
</div>

<div className="ui items">
  <div className="item email">
    <div className="ui right pointing red basic label">
      <i className="envelope open outline icon"></i>
    </div>
    <div className="email content">
      <a href="mailto:contactme@rgdeveloper.com" className="email description">contactme@rgdeveloper.com</a>
    </div>
  </div>
  <div className="item phone">
    <div className="ui right pointing red basic label">
      <i className="mobile alternate icon"></i>
    </div>
    <div className="phone content">
      <div className="phone">555-555-5555</div>
    </div>
  </div>
</div>










<div className="column">
  <div className=" ui fluid card">
    <div className="projectImg image">
      <img src="./images/coffee/brooke-lark-289769-unsplash.jpg" />
    </div>
    <div className="content">
      <div className="center aligned header">Matt Giampietro</div>
      <div className="center aligned description"> Matthew is an interior designer living in New York.</div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Decline</div>
      </div>
    </div>
  </div>
</div>



<div className="ui fluid card">
  <div className="image">
    <img src="./images/coffee/brooke-lark-289769-unsplash.jpg" />
  </div>
  <div className="content">
    <div className="header">Project Title</div>
    <div className="meta">Project Meta</div>
    <div className="description">I was very excited. I went through puberty in a theme park. I think American news is pretty tragic in general. </div>
  </div>
  <div className="extra content">
    <span class="right floated">
      Joined in 2013
    </span>
    <span>
      <i class="user icon"></i>
      75 Friends
    </span>
  </div>
</div>




const ProjectGallery = () => {
  return (
    <div className="projectGalleryContainer container" id="myProjects">
      <div className="backgroundImg"></div>
      <div className="galleryIntro">
        <h1 className="pgtitle sectionTitle">Project Gallery</h1>

      </div>
      <div className="gridContainer ">

        {/* <ProjectCard /> */}

        <div className="ui three stackable centered link cards three column grid ">
          <div className="column">
            <div className="ui fluid card">
              <div className="image">
                <img src='./images/coffee/michal-parzuchowski-324218-unsplash.jpg' />
              </div>
              <div className="content">
                <div className="header">{projectData.title}</div>
                <div className="description">{projectData.description} </div>
                <br />
                <div className="techUsed">{projectData.tech}</div>
              </div>
              <div className="extra content">
                <span className="right floated">
                  <i className="arrow circle right large icon"></i>
                  <a href={projectData.github}>Check it out</a>
                </span>
                <span>
                  <i className="github large icon"></i>
                  <a href={projectData.projectsite}>Github</a>
                </span>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}









const projs = [
  { title: 'x', desc: 'abc' },
  { title: 'y', desc: 'abc' },
]
const Item = ({ title, desc }) => 
<div key={key}>
  <div>{title}</div>
  <div>{desc}</div>
</div>
const gal = () => {
  return <div>
    {projs.map((proj, i, a) => {
      <Item {...{ title: proj.title, desc: proj.desc, key: i }} />
    })}
  </div>
}



function abc(obj, { o }) {
  console.log(obj.myNumber)
}
abc({ myNumber: 123 }, { o: 123 })


react.render(function (props) {
  return react(function () { })
})



    {projectData.map((data, i ,a) =>  {
          return <ProjectCard {...{title: data.title, description: data.description, image: data.image.src, tech: data.tech, github: data.github, projectsite: data.projectsite, key: i }} />
        })}


                        {projectData.map((data, i ,a) =>  {
          return <ProjectCard {...{...data, key:i}} />
        })}




<div className="projectCardContainer" key={key}>

  <div className="ui three stackable centered link cards three column grid container">
    <div className="column">
      <div className="ui fluid card" key={key}>
        <div className="image">
          <img src={image.src} alt={image.alt} />
        </div>
        <div className="content">
          <div className="header">{title}</div>
          <div className="description">{description} </div>
          <br />
          <div className="techUsed">{tech}</div>
        </div>
        <div className="extra content">
          <span className="right floated">
            <i className="arrow circle right large icon"></i>
            <a href={github}>Check it out</a>
          </span>
          <span>
            <i className="github large icon"></i>
            <a href={projectsite}>Github</a>
          </span>
        </div>
      </div>
    </div>
  </div>

</div>







<div className="ui four card">
  <div className="card">
    <div className="image">
      <img src={image.src} alt={image.alt} />
    </div>
    <div className="content">
      <div className="header">{title}</div>
      <div className="description">{description} </div>
      <br />
      <div className="techUsed">{tech}</div>
    </div>
    <div className="extra content">
      <span className="right floated">
        <i className="arrow circle right large icon"></i>
        <a href={github}>Check it out</a>
      </span>
      <span>
        <i className="github large icon"></i>
        <a href={projectsite}>Github</a>
      </span>
    </div>
  </div>
</div>