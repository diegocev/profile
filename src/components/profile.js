export default function Profile(props) {
  const { perfil } = props;

  return (
    <div class="columns is-vcentered">
      <div class="column is-3">
        <p class="bd-notification is-primary"></p>

        {/* Columna 1 */}
        <div className="column">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img
                  src={perfil.avatar_url}
                  alt={perfil.name}
                  width={100}
                  height={100}
                />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-5">{perfil.name}</p>
                  <p className="subtitle is-7">
                    <a href="https://www.linkedin.com/in/diegocev">
                    {perfil.blog}
                    </a>
                  </p>
                </div>
              </div>
              <div className="content">
                {perfil.bio}.<br></br>
                <br></br> <a>{perfil.email}</a>
                <br></br> <a href="https://twitter.com/diegojcevallose">@{perfil.twitter_username}</a>
                <br></br>{" "}
                <a href={perfil.html_url}>{perfil.html_url}</a>
                <br></br> Company: {perfil.company}
                <br></br> {perfil.location}
                <br></br>
                <br></br>{" "}
                <time datetime="2016-1-1">Updated At: {perfil.updated_at}</time>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Columna 2 */}
      <div class="columns is-vcentered">
        <div class="column is-12">
          <p class="bd-notification is-primary"></p>

            {/* Columna 2.1 */}
            <div class="column is-12">
            <p class="bd-notification is-primary">
                <div class="card">
                  <div class="card-content">
                    <p class="title">
                        Strategy Marketing Sales & Operations Executive
                    </p>
                    <p class="subtitle">
                        <br></br>
                        <strong>Education & Training:</strong>
                        <br></br>
                          # Master in Business Administration MBA / INCAE Business School
                        <br></br>
                          # Systems and Informatics Engineer / Universidad de las Fuerzas Armadas ESPE | Cum Laude
                        <br></br>
                          # Strategic Marketing and Sales Diploma / TEC de Monterrey ITESM | Cum Laude
                        <br></br>
                    </p>
                  </div>
                  <footer class="card-footer">
                    <p class="card-footer-item">
                      <span>
                        View Profile on <a href={perfil.blog}>LinkedIn</a>
                      </span>
                    </p>
                    <p class="card-footer-item">
                      <span>
                        View Social Network on <a href="https://twitter.com/">Twitter</a>
                      </span>
                    </p>
                  </footer>
                </div>

                <div class="card">
                  <div class="card-content">
                    <div class="content">
                        <strong>Languages:</strong> English · Spanish · French (Basic)
                    </div>
                  </div>
                </div>
            </p>
            </div>

            {/* Columna 2.2 */}
            <div class="column is-12">
            <p class="bd-notification is-primary">
                <div class="card">
                  <div class="card-content">
                    <p class="title">
                        Public Repos: {perfil.public_repos}
                    </p>
                    <p class="subtitle">
                    <br></br>
                        <a href="https://github.com/diegocev/diegocev">diegocev</a>
                        <br></br>
                        <a href="https://github.com/diegocev/llama-contacts">llama-contacs</a>
                        <br></br>
                        <a href="https://github.com/diegocev/team-search">team-search</a>
                        <br></br>
                    </p>
                  </div>
                  <footer class="card-footer">
                    <p class="card-footer-item">
                      <span>
                        View Repos on <a href={perfil.html_url}>GitHub</a>
                      </span>
                    </p>
                    <p class="card-footer-item">
                      <span>
                        Share on <a href="https://www.facebook.com/diegocev">Facebook</a>
                      </span>
                    </p>
                  </footer>
                </div>

                <div class="card">
                  <div class="card-content">
                    <div class="content">
                    <strong>Technical Proficiency: </strong>
                    Power BI · Qlik View · IBM SPSS · SAS Studio · Google Analytics · Git · GitHub · VS Code · Python · React · SQL · AWS API Gateway · AWS Lambdas · Postman · Microsoft Office Suite · Lotus Notes · Google Ads · Facebook Ads · Twitter Ads · Adobe Premier · SAP · AS400 · COBIS Banking ERP · Oracle PLSQL · Sybase DB · Power Builder & Designer
                    </div>
                  </div>
                </div>
            </p>
            </div>
        </div>
      </div>
      </div>
  );
}
