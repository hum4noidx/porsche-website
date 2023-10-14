const ModelCard = (url, image_url, slug) => {
    return (
        <div>
            <a href={url}>
                <img src={image_url} alt={slug}/>
            </a>
        </div>
    )
}

export default ModelCard