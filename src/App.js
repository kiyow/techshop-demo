import logo from './logo.svg';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>

        <nav class="navbar background">
          <ul class="nav-list" >
            {/* TODO: must be moved to a navigation bar component */}
            <div class="site-logo">
              <a href="/"><img src="/logo.png" /></a>
            </div>

            <li>
              <a href="/todo">
                <ol class="location-icon">
                  <li><AddLocationIcon /></li>
                  <li>Address</li>
                  </ol>
              </a>
            </li>

            <li>
              { /* TODO: implement search */}
              <div class="nav-search">
                <input type="text" name="search" id="search" />
                <button class="btn btn-sm">Search</button>
              </div>
            </li>

            <li>
              { /* TODO: create an account management page */}
              <a href="/todo">Account</a>
            </li>
            <li>
              { /* TODO: implement right panel cart */}
              <a href="/todo">Cart</a>
            </li>
          </ul>
        </nav>

        <section class="section">
          <div class="box-shop-category">
            { /* TODO: implement a category grid */}
            <p>Fill with Categories grid:</p>
            <p>Lorem ipsum dolor sit amet. Est velit illo <em>Eum assumenda et repellendus quia 33 omnis veritatis</em>. Et incidunt error aut nihil nemoEt blanditiis qui laborum eius est autem officiis sed amet officiis. Aut dolorum quiaQui sapiente sit odio tempora aut dicta praesentium est inventore iusto ea ipsam galisum qui laudantium recusandae. Est amet undeaut eveniet et voluptatem eligendi. Id alias reprehenderit sit ullam minimaUt dignissimos id obcaecati voluptatum et odio nisi! Ut quam blanditiis <a href="https://www.loremipzum.com" target="_blank">Non ipsa non eius quia et autem Quis</a>. Sed quasi placeatAut labore ut quos ipsa aut voluptate perferendis aut sint voluptatum. In dignissimos asperiores et mollitia sapientevel quos. Est incidunt consequatur non cupiditate magniNon harum est Quis amet vel earum tenetur cum sint eligendi eum esse quia. </p><p>Ad facilis magniEt voluptate sed voluptas voluptatem rem quia autem sed quia beatae. In quas repellat eos autem laudantiumet laborum et omnis debitis qui aliquam saepe. A dolores obcaecati <strong>Qui eius et nihil totam qui minima maiores</strong> aut consequatur voluptatibus et nobis perferendis. Sit quaerat mollitia in sint aperiamnam voluptas qui aperiam inventore rem odit neque. Et minus consectetur <a href="https://www.loremipzum.com" target="_blank">Et voluptatem</a> eum blanditiis numquam? </p><p>Qui assumenda galisum At ipsum velitest aliquid sit officia voluptatem. Hic consequuntur consectetur aut corporis laboriosam <strong>Hic temporibus ad sint ipsam</strong>. Ut ullam laboriosam ut iusto repudiandaeaut ullam! Qui ullam odit <em>Cum maxime sed rerum atque</em>. Qui molestiae quasNon quae aut quia necessitatibus ut nostrum necessitatibus et fugit enim et officia quod non quos inventore. Rem pariatur aliquidAut voluptas sit omnis quibusdam cum soluta consequatur non totam voluptates? Aut sunt nemo ut incidunt itaqueeum praesentium vel tempora unde. </p><p>Vel libero saepeQui ducimus aut sapiente voluptas id iusto esse aut doloremque delectus. Qui quia tempore sed dolorem assumendaEt omnis et dolorum officiis et nihil nulla ut consequatur autem vel tempora optio. Quo suscipit iustoQuo possimus qui autem vitae aut enim excepturi sit quia voluptatum sit voluptatem suscipit non odit odit. Est cupiditate temporibusrem facere id vitae odit. Ea vero voluptatem <strong>Non architecto</strong> in consequatur harum. Qui quibusdam dolorum ut aspernatur voluptates <em>Cum officiis ut soluta aliquid in quia quia cum sunt saepe</em>. Aut tempora galisum <a href="https://www.loremipzum.com" target="_blank">At corporis et consectetur molestiae et facere quisquam</a> et reiciendis esse vel corporis corporis! </p>
          </div>
        </section>
        <section class="section">
          <div class="box-on-sale">
            { /* TODO: implement a products on sale grid */}
            <p>Fill with Top selling items:</p>
            <p>Lorem ipsum dolor sit amet. Et exercitationem laborum rem pariatur galisum <em>Et recusandae aut dolor architecto eos praesentium optio ut repellendus praesentium</em> est illo cumque. Cum praesentium galisum id ipsum placeat <strong>Hic minus et cumque nostrum</strong> eos internos autem 33 fuga voluptas aut voluptas earum. Et sint perferendis <a href="https://www.loremipzum.com" target="_blank">Est distinctio et quasi cumque non rerum sequi</a>. Est sunt voluptatumEt explicabo sit similique consequatur qui repudiandae rerum est saepe aspernatur sit libero velit non eveniet laboriosam. Et repudiandae ipsum et iure optioqui ipsum id enim ipsum. Ut corporis fugiat quo praesentium totamAut consequatur ut sint unde sit quam nobis est autem magnam. Eum modi quiaEst voluptatem et expedita galisum ut quaerat eius. </p><p>Vel laudantium laboriosam non mollitia inventoreab temporibus? Sit aliquam pariaturNam ullam aut saepe dolorum et dignissimos fugiat sed impedit voluptates At dolorem ipsum non quae consequuntur. Aut temporibus sapiente 33 dicta quisquamId cumque id doloremque provident ut sequi voluptas non suscipit voluptatem qui numquam nostrum. 33 rerum veritatis est ipsum eiusUt eaque At impedit quia ut expedita libero. Qui corrupti laudantium in quae asperiores <a href="https://www.loremipzum.com" target="_blank">Ut iusto et asperiores nesciunt ea voluptatem facere est quod incidunt</a> quo dicta obcaecati? Qui nostrum odit <em>Ea incidunt</em> et praesentium voluptatem? Est eaque enim <strong>Ut alias aut repudiandae laborum qui tempora amet</strong> eum fugiat vero quo eveniet eligendi sit dolores blanditiis. Ab quibusdam tenetur est vero Quisea quas eum earum accusantium! Est veniam doloresQui itaque cum commodi obcaecati et dolore corrupti. </p><p>Sit rerum fugiat <em>Sit doloremque quo corporis iure ea dicta molestias</em> est voluptate ipsa. Quo molestiae aliquid <strong>Est doloremque sed laudantium illum</strong>. Ut nostrum consecteturEt sint et amet molestiae aut distinctio culpa! Et beatae officiis et quia pariaturUt excepturi est ipsam laudantium aut necessitatibus modi id consequatur accusamus ut autem nostrum. Ab iste assumenda cum enim doloribusId sunt! </p><p>Aut dolor magnamQui aliquam aut quasi sint! At voluptatem asperiores <em>Et consequuntur</em> nam explicabo voluptatibus? Et dolore sapienteEt amet et enim placeat eos quis molestiae in possimus consequatur. Est dolorem molestiae est dignissimos internosEt quia qui obcaecati quisquam vel odio iure. Sit quam quiaUt eligendi non dicta exercitationem. Eos aliquam impedit <a href="https://www.loremipzum.com" target="_blank">Qui voluptatibus id tenetur iure</a>. Ut aliquid quisquam aut officiis omnis <strong>Eos officia et nisi fugiat in aliquid nihil eos amet earum</strong>. Vel sequi corporis sit sint repudiandaeAut recusandae aut deserunt reiciendis. Eum tempore excepturi aut modi itaqueEa praesentium et quaerat animi in natus porro qui quia voluptatibus qui pariatur impedit. </p>

          </div>
        </section>
        <section class="section">
          <div class="box-top-selling">
            { /* TODO: implement a top selling scrollable item list */}
            <p>Fill with Top selling items:</p>
            <p>Lorem ipsum dolor sit amet. Ut eius officia ut dolorem necessitatibus <strong>Non animi nam nobis provident At cumque fugiat qui facere quas</strong>. Est sunt porroAut laboriosam est velit odit vel eligendi autem. Sit totam sunt <a href="https://www.loremipzum.com" target="_blank">Aut culpa qui harum praesentium est sapiente enim hic tempora neque</a>. Et voluptatibus eaque <em>Ut explicabo</em> sed vitae saepe eum officiis molestiae. Non molestiae blanditiis eos quos culpaUt dolores ut incidunt consequatur a quis perspiciatis. </p><p>Eum esse harumEst nobis eos amet similique ea vitae odit. Id molestiae neque et consequuntur minusnon rerum ut suscipit veritatis. Et tenetur tenetur <strong>Est nulla eum consequatur sapiente est amet quod</strong> eum quibusdam doloribus. Eum cupiditate debitis aut voluptas cumquehic aperiam sed inventore quos? Id possimus omnis qui rerum ipsumUt galisum est maiores dignissimos. </p><p>Est vitae quia est dolorem facilisQui rerum ut sint impedit sit voluptatem incidunt ea cupiditate doloribus hic optio nihil. Qui animi nihil <strong>In vero non molestias ipsam et nesciunt praesentium</strong> qui veritatis incidunt ut internos tempore et ipsa omnis. Eum omnis quia et cupiditate distinctioeum soluta. Ad similique expedita et nostrum eligendiVel unde cum quia deserunt et dicta iusto. Rem provident maioresEt molestiae aut sunt mollitia et enim voluptate eum voluptas reprehenderit. </p><p>Qui praesentium molestias sed velit natusEst amet in magnam quia non eius omnis ut obcaecati rerum. Qui numquam debitis ea dignissimos voluptatemeos aliquam non assumenda ipsa. Et minus quos vel officia voluptatem <em>Et illum qui molestiae suscipit eos explicabo porro</em>. Sit iusto maiores est iste doloreea dolores. Et numquam nostrum et deleniti unde <a href="https://www.loremipzum.com" target="_blank">Et placeat est quia cumque eum eligendi itaque</a>. </p>

          </div>
        </section>

        <footer className="footer">
          <p className="text-footer">
            Copyright© kiyow - All rights are reserved
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
