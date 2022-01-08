import Link from "next/link";

function ProjectItem({project}) {
    return <div className='card' style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
        <img src={project.frontMatter.cover_image} alt=" "/>
        &nbsp;
        <h3>{project.frontMatter.title}</h3>
        <p style={{color:'grey'}}>{project.frontMatter.excerpt}</p>
        <div style={{display:'flex', justifyContent:'space-between'}}>
        <a className="btn" style={{borderRadius: '5px'}} href={project.frontMatter.web_url} target="_blank"><code>Check it out</code></a>
        <a className="btn" style={{borderRadius: '5px'}} href={project.frontMatter.code_url} target="_blank"><code>source_code</code></a>
        </div>
        </div>
}

export default ProjectItem;