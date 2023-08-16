import "./NewSkillForm.css";

export default function NewSkillForm() {
    return (
        <form className="NewSkillForm">
            <label>
                Skill
            </label>
            <input type="text" />
            <label>
                Level
            </label>
            <select>
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
                <option value="1">5</option>
            </select>
            <button>ADD SKILL</button>
        </form>
    )
}