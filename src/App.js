import "./style.css"
import pic from "./Img.png"

const skills = [
    {
      skill: "HTML+CSS",
      level: "advanced",
      color: "#2662EA"
    },
    {
      skill: "JavaScript",
      level: "advanced",
      color: "#EFD81D"
    },
    {
      skill: "Web Design",
      level: "advanced",
      color: "#C3DCAF"
    },
    {
      skill: "Git and GitHub",
      level: "intermediate",
      color: "#E84F33"
    },
    {
      skill: "React",
      level: "advanced",
      color: "#60DAFB"
    },
    {
      skill: "Svelte",
      level: "beginner",
      color: "#FF3B00"
    }
  ];
   
function Skill({skill, level, color}) {
    return (
    <div className="skill" style={{ backgroundColor: color }} >
        <span>{skill}</span>
        <span>{level=="advanced" && "💪"}</span>
        <span>{level=="beginner" && "👶"}</span>
        <span>{level=="intermediate" && "👍"}</span>
    </div>
    )
}

function SkillList() {
    return(
        <div className="skill-list" > {
        skills.map((skill)=><Skill skill={skill.skill} level={skill.level} color={skill.color}/>)}
        </div>
    )

}

export default function App (){
    return(
        <div className="card">
        <img className="avatar" src={pic}  />
        <h2 className="body">Venkat</h2>
        <p>Hi Venkat</p>
        <SkillList />
        </div>

    )
   
}