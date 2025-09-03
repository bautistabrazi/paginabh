import '../css/historia.css';
import foto1 from '../../assets/1.jpg'
import foto2 from '../../assets/2.jpg'
import React from 'react';

export default function Historia() {
  
  return (
    <div id="historia">
      <div className='velo-contenedor'><div className="velo-horizontal"></div></div>
      <div className='fotos-container'> 
        <div className='inner-grid div-foto-historia'>
          <img src={foto1} className='historia-foto left'/>
          <div className='grid center historia-texto-right'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, iusto fugit recusandae accusantium, ab voluptatem velit ducimus illum excepturi delectus nihil et neque, debitis unde inventore sit omnis necessitatibus tenetur laborum asperiores fuga earum explicabo. Est at mollitia molestiae doloremque sapiente, ratione animi nostrum voluptatum sed error ab nemo adipisci obcaecati ut illo similique ea perferendis numquam. Commodi vitae repellat amet delectus cumque! Unde consequuntur suscipit laboriosam recusandae dignissimos dolores non quasi, explicabo placeat aliquid excepturi corporis qui eius temporibus inventore, mollitia, pariatur nesciunt. Cupiditate laborum ea quia eius quo expedita natus. Cumque et eligendi animi ipsa aliquid ipsum quasi!</p></div>
        </div>
        <div className='inner-grid div-foto-historia'>
          <div className='grid center historia-texto-left'><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore recusandae eius ratione ab corporis? Id et cum sit! Maxime ea commodi impedit reiciendis accusamus quia architecto culpa, ipsum incidunt voluptate dolore dolor aliquam odit optio nam quidem magni nobis dolores sit officiis, doloremque repellendus quod autem. Temporibus magnam beatae voluptate!</p></div>
          <img src={foto2} className='historia-foto right'/>
        </div>
        <div className='inner-grid div-foto-historia'>
          <img src={foto2} className='historia-foto left'/>
          <div className='grid center historia-texto-right'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt optio dolorem repudiandae laboriosam hic explicabo doloremque consectetur ex qui. Atque consequatur error, nulla voluptatem enim doloremque iste? Incidunt repellendus itaque temporibus, repudiandae sit dolor labore quia consequatur explicabo dolorem alias aut, ratione et quos, doloremque tempore eveniet. Nobis placeat numquam blanditiis suscipit, a reiciendis, sed tempora et eligendi fugiat nihil. Sint laborum laboriosam voluptate saepe!</p></div>
        </div>
        <div className='inner-grid div-foto-historia'>
          <div className='grid center historia-texto-left'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, dolorem nemo. Reprehenderit corporis nulla exercitationem, incidunt fuga accusamus quia ducimus.</p></div>
          <img src={foto1} className='historia-foto right'/>
        </div>
      </div>
    </div>
  );
}
