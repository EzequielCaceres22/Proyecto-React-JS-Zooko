import React from 'react'
import BannerFooter from "../images/banner-footer.png"
import wpp from "../images/whatsapp.svg"
import fb from "../images/facebook.svg"
import tw from "../images/twitter.svg"
import yt from "../images/youtube.svg"
import pint from "../images/pinterest.svg"
import ig from "../images/instagram.svg"
import PayMethods from './PayMethods'
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <img className="bannerfot" src={BannerFooter} alt="" />
            <div className="footer">
                <div className="btn-div">
                    <Link to={"https://api.whatsapp.com/send?phone=59891833348"}><button className="ul-stl"><img className="btn-ico"src={wpp} alt="" /></button></Link>
                    <Link to={"https://www.facebook.com/zookostore"}><button className="ul-stl"><img className="btn-ico" src={fb}alt="" /></button></Link>
                    <Link to={"https://twitter.com/zookostore"}><button className="ul-stl"><img className="btn-ico" src={tw} alt="" /></button></Link>
                    <Link to={"https://www.youtube.com/Zookostore"}><button className="ul-stl"><img className="btn-ico" src={yt}alt="" /></button></Link>
                    <Link to={"https://www.pinterest.com/zookostore/"}><button className="ul-stl"><img className="btn-ico" src={pint} alt="" /></button></Link>
                    <Link to={"https://www.instagram.com/zookostore/"}><button className="ul-stl"><img className="btn-ico" src={ig} alt="" /></button></Link>
                </div>
            

            <div className="container text-center div-info">
                <div className="row row-cols-4">
                    <div className="col info-cls">
                        <ul>
                            <h5>Zooko Store</h5>
                            <li><Link className="link-color" to={"https://www.zooko.com.uy/nosotros"} target='blank'>Nosotros</Link></li>
                            <li><Link className="link-color" to={"https://www.zooko.com.uy/contacto"} target='blank'>Contacto</Link></li>
                            <li><Link className="link-color" to={"https://www.zooko.com.uy/tiendas"} target='blank'>Tiendas</Link></li>
                            <li><Link className="link-color" to={"https://www.zooko.com.uy/trabaja-con-nosotros"} target='blank'>Trabaja en Zooko</Link></li>
                        </ul>
                    </div>
                    <div className="col info-cls">{}
                        <ul>
                            <h5>Más Info</h5>
                            <li><Link className="link-color" to={"https://www.zooko.com.uy/cambios"} target='blank'>Como Realizar Cambios</Link></li>
                            <li><Link className="link-color" to={"https://www.zooko.com.uy/terminos-y-condiciones"} target='blank'>Términos y Condiciones</Link></li>
                            <li><Link className="link-color" to={"https://www.zooko.com.uy/como-comprar"} target='blank'>Como Comprar</Link></li>
                            <li><Link className="link-color" to={"https://www.zooko.com.uy/envios-y-devoluciones"} target='blank'>Envios y devoluciones</Link></li>
                            <li><Link className="link-color" to={"https://www.zooko.com.uy/preguntas-frecuentes"} target='blank'>Preguntas Frecuentes</Link></li>
                        </ul>
                    </div>
                    <div className="col info-cls">
                        <ul>
                            <h5>Cuenta</h5>
                            <li><Link className="link-color" to={"https://www.zooko.com.uy/ingresar"} target='blank'>Mi cuenta</Link></li>
                            <li><Link className="link-color" to={"https://www.zooko.com.uy/ingresar"} target='blank'>Mis compras</Link></li>
                            <li><Link className="link-color" to={"https://www.zooko.com.uy/ingresar"} target='blank'>Mis direcciones</Link></li>
                            <li><Link className="link-color" to={"https://www.zooko.com.uy/ingresar"} target='blank'>Wish List</Link></li>
                        </ul>
                    </div>
                    <div className="col info-cls">
                        <h5>Newsletter</h5>
                        <p>¡Suscribite y recibí todas nuestras novedades!</p>
                        <input type="email" placeholder="Ingresa tu e-mail"/><button className="btn-sub"><b>SUSCRIBIRSE</b></button>
                    </div>
                    
                </div>
            </div>
            <PayMethods/>
            </div>
        </div>
)
}

export default Footer