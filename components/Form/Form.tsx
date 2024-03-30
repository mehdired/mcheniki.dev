import { FormGroup } from '../FormGroup/FormGroup'
import { Input } from '../Input/Input'
import { Textarea } from '../Textarea/Textarea'

export function Form({ ...rest }) {
    return (
        <form method="post" {...rest}>
            <div className="flex items-center gap-12">
                <FormGroup name="name" className="flex-1">
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        required="required"
                    />
                </FormGroup>
                <FormGroup name="email" className="flex-1">
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        required="required"
                    />
                </FormGroup>
            </div>
            <FormGroup name="message" className="mt-24">
                <Textarea id="message" required="required" />
            </FormGroup>
        </form>
    )
}
