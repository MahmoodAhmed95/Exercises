import "./SkillListItem.css";

export default function SkillListItem({skill}) {
    return (
        <li className="SkillListItem">{skill.name} <p className="level">{skill.level}</p></li>
    )
}