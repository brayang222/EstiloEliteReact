 const WatchCard = ({imgURL, changeWatchImage, watchImg}) => {
      const handleClick = () => {
        if(watchImg !== imgURL.watch) {
          changeWatchImage(imgURL.watch)
        }
      };
   return (
        <div className={`${watchImg === imgURL.watch ? 
          "border-primary" : 'border-transparent'
        }selection-container`} onClick={handleClick}>
          <div className="selection-card">
            <img src={imgURL.thumbnail} alt="" />
          </div>
        </div>
    )
 }
 
 export default WatchCard