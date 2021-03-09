import { InfoPaginaService } from '../services/info-pagina.service';



export interface InfoPagina{
  titulo?: string;
  email?: string;
  nombre_corto?: string;
  pagina_autor?: string;
  facebook?: string;
  instagram?: string;
  tumblr?: string;
  grupo_de_trabajo?: any[];
}