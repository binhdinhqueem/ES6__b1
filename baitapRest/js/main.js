function getEle(id){
    return document.getElementById(id);
}
const getSum=(...rest) =>{
    let tinhTong = 0;
    for(let i = 0;i < rest.length; i++){
        tinhTong += rest[i]*1;
    }
    let diemTB = tinhTong / rest.length
   return diemTB;
}

document.getElementById("btnKhoi1").onclick = () =>
{
   const khoiMot = {
    ly : getEle("inpLy").value*1,
    hoa : getEle("inpHoa").value*1,
    toan : getEle("inpToan").value*1
   }

document.getElementById("tbKhoi1").innerHTML = getSum(khoiMot.ly, khoiMot.hoa, khoiMot.toan);

};
document.getElementById("btnKhoi2").onclick = () =>
{

    const khoiHai = {
        van: getEle("inpVan").value*1,
        su: getEle("inpSu").value*1,
        dia: getEle("inpDia").value*1,
        tiengAnh: getEle("inpEnglish").value*1
    }

document.getElementById("tbKhoi2").innerHTML = getSum(khoiHai.van,khoiHai.su,khoiHai.dia,khoiHai.tiengAnh);

};