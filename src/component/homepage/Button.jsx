export default function Button(props) {
    return (
        <>
            <a href={props.url} target={props.target}><button type="button" class="text-white font-semibold text-bold px-6 py-2.5 rounded bg-gradient-to-r from-purple-500 to-cyan-700 hover:from-gray-900 hover:to-gray-900 ...">
                {props.title}
            </button></a>


        </>

    )
}