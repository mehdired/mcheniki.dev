import { Input } from '../Input/Input'

export function Form() {
    return (
        <form>
            <div>
                <div>
                    <label htmlFor="name">Name</label>
                    <Input type="text" id="name" name="name" />
                </div>
            </div>
        </form>
    )
}
