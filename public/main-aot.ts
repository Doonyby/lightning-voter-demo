import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import './app/rxjsOperations';
import { AppModule } from './app/app.module';

import { AppModuleNgFactory } from '../aot/public/app/app.module.ngfactory';
import { downgradeItems } from './downgrades';

enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory).then(platformRef => {
    
    downgradeItems();

    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.documentElement, ['app']);
    console.log('hybrid app bootstrapped');
})