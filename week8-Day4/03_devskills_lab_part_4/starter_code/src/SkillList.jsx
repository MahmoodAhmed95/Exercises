import SkillListItem from "./SkillListItem";

export default function SkillList({skills}) {

    return (
        <ul>
            {skills.map((skill,idx) => <SkillListItem skill={skill} key={idx}/>)}
        </ul>
    )
}