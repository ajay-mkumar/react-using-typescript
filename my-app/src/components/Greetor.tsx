interface GreetorProps {
    name: string;
}

function Greetor({ name }: GreetorProps): JSX.Element {
    return <> Hello {name}</>
}

export default Greetor;