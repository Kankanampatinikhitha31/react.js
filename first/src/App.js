import {Child} from "./Child";
function App()
{
    let  img1=<img src="https://occ-0-2042-3663.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABbh3iLynyI9fnmD74KVuZUw0DtpQl6vnhGciuOIwRNZqc5tarpET4LH1rU9-ND0uYmpJw9HS7WSvurVgx2FbibobfR-icrBSWajxYD-KM3ksyb02OJvBG7lLWqOWNPo3CuYTET8Bdk-lD4fjk605CyncePEJvoRldLY.jpg?r=e65" alt/>
    let imageName = "Dunki Movie Image";
    let img2=<img src="https://occ-0-2042-3663.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABdv0IRVoa_UJz_c6FtBX9LFjmXOT7cRwvGsYpmgDZda-VoFuEZtSq6tLFm0JJ61PApztV2q8p8zpFXyPRM8BYLhP5OJm9X3fWGR20WEXVyU4V_8Ec5FmTp2eirM-0LtFTQx3g6dmFWJdF9ERn95UScGi28QSBE6Xogs.jpg?r=434"/>
    let imageName2="Animal Movie Image"
    return(
        <div>
            <Child ad={img1} imageName = {imageName} ad2= {img2}  imageName2 = {imageName2} />
        </div>
    )
}export default App