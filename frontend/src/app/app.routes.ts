import { Routes } from '@angular/router';
import { ComprarComponent } from './pages/comprar/comprar.component';
import { HomeComponent } from './pages/home/home.component';
import { TasaTuCocheComponent } from './pages/tasa-tu-coche/tasa-tu-coche.component';
import { LocalizacionComponent } from './pages/localizacion/localizacion.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PrivacyComponent } from './pages/privacidad/privacy.component';
import { AvisoLegalComponent } from './pages/aviso-legal/aviso-legal.component';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { ConcertarCitaComponent } from './pages/concertar-cita/concertar-cita.component';
import { AlquilarComponent } from './pages/alquilar/alquilar.component';
import { iniSesRegComponent } from './pages/iniSes-Reg/iniSes-Reg.component';
import { ModificarStockComponent } from './pages/modificar-stock/modificar-stock.component';
import { ReservasComponent } from './pages/reservas/reservas.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'comprar', component: ComprarComponent },
    { path: 'alquilar', component: AlquilarComponent },
    { path: 'tasa-tu-coche', component: TasaTuCocheComponent },
    { path: 'localizacion', component: LocalizacionComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'privacidad', component: PrivacyComponent },
    { path: 'aviso-legal', component: AvisoLegalComponent },
    { path: 'cookies', component: CookiesComponent },
    { path: 'sobre-nosotros', component: SobreNosotrosComponent },
    { path: 'concertar-cita', component: ConcertarCitaComponent },
    { path: 'iniSes-Reg', component: iniSesRegComponent },
    { path: 'modificar-stock', component: ModificarStockComponent },
    { path: 'reservas', component: ReservasComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
