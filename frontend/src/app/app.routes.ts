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
    { path: 'home', component: HomeComponent, data: { title: 'Inicio | Autos Miari'} },
    { path: 'comprar', component: ComprarComponent, data: { title: 'Comprar | Autos Miari'} },
    { path: 'alquilar', component: AlquilarComponent, data: { title: 'Alquilar | Autos Miari'} },
    { path: 'tasa-tu-coche', component: TasaTuCocheComponent, data: { title: 'Tasa tu vehículo | Autos Miari'} },
    { path: 'localizacion', component: LocalizacionComponent, data: { title: 'Localización | Autos Miari'} },
    { path: 'contacto', component: ContactoComponent, data: { title: 'Contacto | Autos Miari'} },
    { path: 'privacidad', component: PrivacyComponent, data: { title: 'Política de privacidad | Autos Miari'} },
    { path: 'aviso-legal', component: AvisoLegalComponent, data: { title: 'Aviso legal | Autos Miari'} },
    { path: 'cookies', component: CookiesComponent, data: { title: 'Política de cookies | Autos Miari'} },
    { path: 'sobre-nosotros', component: SobreNosotrosComponent, data: { title: 'Sobre nosotros | Autos Miari'} },
    { path: 'concertar-cita', component: ConcertarCitaComponent, data: { title: 'Concertar cita | Autos Miari'} },
    { path: 'iniSes-Reg', component: iniSesRegComponent, data: { title: 'Autenticación | Autos Miari'} },
    { path: 'modificar-stock', component: ModificarStockComponent, data: { title: 'Modificar stock | Autos Miari'} },
    { path: 'reservas', component: ReservasComponent, data: { title: 'Reservas | Autos Miari'} },
    { path: '**', redirectTo: 'home', pathMatch: 'full', data: { title: 'Inicio | Autos Miari'} }
];
