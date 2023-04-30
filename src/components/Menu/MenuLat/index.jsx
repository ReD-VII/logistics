import React, { useState } from 'react'
import { MenuLatConteiner, MenuLatBTN } from './styles'



// ROTAS
import { Link } from 'react-router-dom';

// ICONES
import { IoCaretForwardOutline } from "react-icons/io5";

// IMAGENS
import userAvatar from '../../../assets/img/avatar.svg'

const MenuLat = () => {

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  console.log(menuIsOpen)
  return (
    <>
      <MenuLatBTN menuIsOpen={menuIsOpen}>
        <div className='openMenuContent' onClick={() => setMenuIsOpen(!menuIsOpen)}>
          <IoCaretForwardOutline className='iconOpenMenu' />
        </div>
      </MenuLatBTN>
      <MenuLatConteiner menuIsOpen={menuIsOpen}>
        {/* BOX 01 */}
        <div className='boxes_MenuLatConteiner'>
          <div className='user_infos'>
            <img className='user_infos_avatar' src={userAvatar} alt="" />
          </div>
          <div className='user_infos'></div>
          <div className='user_infos'></div>
        </div>
        {/* BOX 01 */}
        <div className='boxes_MenuLatConteiner'>
          {menuIsOpen &&
            <>
              <p className='title_menus'>Cadastros</p>
              <nav className='nav_MenuLatConteiner'>
                <ul>
                  <li><Link className='link_MenuLatConteiner' to='/'>Cadastro de rotas</Link></li>
                  <li><Link className='link_MenuLatConteiner' to='/'>Cadastro de TAC</Link></li>
                  <li><Link className='link_MenuLatConteiner' to='/'>Cadastro de fornecedores</Link></li>
                </ul>
              </nav>

              <p className='title_menus'>Relatorios</p>
              <nav className='nav_MenuLatConteiner'>
                <ul>
                  <li><Link className='link_MenuLatConteiner' to='/'>Relatorio D-1 </Link></li>
                  <li><Link className='link_MenuLatConteiner' to='/'>Relatorio desempenho base </Link></li>

                </ul>
              </nav>
            </>
          }
        </div>
        {/* BOX 01 */}
        <div className='boxes_MenuLatConteiner'></div>

      </MenuLatConteiner>
    </>
  )
}

export default MenuLat