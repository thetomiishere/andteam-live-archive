(function(_0x1b5a, _0x3c2e) {
    const _0x4d2c = _0x221a;
    const _0xArray = _0x1b5a();
    while (!![]) {
        try {
            const _0xCheck = parseInt(_0x4d2c(0x101)) / 0x1 + parseInt(_0x4d2c(0x102)) / 0x2 * (-parseInt(_0x4d2c(0x103)) / 0x3) + parseInt(_0x4d2c(0x104)) / 0x4;
            if (_0xCheck === _0x3c2e) break;
            else _0xArray['push'](_0xArray['shift']());
        } catch (_0xerr) {
            _0xArray['push'](_0xArray['shift']());
        }
    }
}(_0x55d1, 0x3a4b2));

import { andTEAM as _0xaT } from './pages/andTEAM.js';
import { ej as _0xEJ } from './pages/individual/ej.js';
import { fuma as _0xFU } from './pages/individual/fuma.js';
import { k as _0xK } from './pages/individual/k.js';
import { nico as _0xNI } from './pages/individual/nico.js';
import { yuma as _0xYU } from './pages/individual/yuma.js';
import { jo as _0xJO } from './pages/individual/jo.js';
import { harua as _0xHA } from './pages/individual/harua.js';
import { taki as _0xTA } from './pages/individual/taki.js';
import { maki as _0xMA } from './pages/individual/maki.js';

function _0x221a(_0xidx, _0xsec) {
    const _0xlist = _0x55d1();
    return _0x221a = function(_0x01, _0x02) {
        _0x01 = _0x01 - 0x100;
        return _0xlist[_0x01];
    }, _0x221a(_0xidx, _0xsec);
}

document['addEventListener']('DOMContentLoaded', () => {
    const _0xG = _0x221a;
    const _0x33e = document['getElementById'](_0xG(0x105));
    const _0x44f = document['querySelector']('.' + _0xG(0x106));
    const _0x11c = document['querySelector']('.' + _0xG(0x107));
    const _0xovl = document['createElement']('div');
    _0xovl['className'] = _0xG(0x108);
    document['body']['appendChild'](_0xovl);

    if (_0x33e) {
        _0x33e['addEventListener']('click', (_0xe) => {
            _0xe['stopPropagation']();
            _0x44f['classList']['toggle']('active');
            _0x11c['classList']['toggle'](_0xG(0x109));
            _0xovl['classList']['toggle']('active');
        });
    }

    const _0xnav = {
        'andTEAMBtn': { 'h': '#/andTEAM', 's': 'andTEAM', 'f': _0xaT },
        'ejBtn': { 'h': '#/EJ', 's': 'EJ', 'f': _0xEJ },
        'fumaBtn': { 'h': '#/FUMA', 's': 'FUMA', 'f': _0xFU },
        'kBtn': { 'h': '#/K', 's': 'K', 'f': _0xK },
        'nicoBtn': { 'h': '#/NICO', 's': 'NICO', 'f': _0xNI },
        'yumaBtn': { 'h': '#/YUMA', 's': 'YUMA', 'f': _0xYU },
        'joBtn': { 'h': '#/JO', 's': 'JO', 'f': _0xJO },
        'haruaBtn': { 'h': '#/HARUA', 's': 'HARUA', 'f': _0xHA },
        'takiBtn': { 'h': '#/TAKI', 's': 'TAKI', 'f': _0xTA },
        'makiBtn': { 'h': '#/MAKI', 's': 'MAKI', 'f': _0xMA }
    };

    Object['entries'](_0xnav)['forEach'](([_0xid, _0xcfg]) => {
        const _0xb = document['getElementById'](_0xid);
        if (_0xb) {
            _0xb['addEventListener']('click', _0xe => {
                _0xe['preventDefault']();
                history['pushState']({ 'section': _0xcfg['s'] }, '', _0xcfg['h']);
                _0xS(_0xcfg['s']);
                _0xcfg['f']();
            });
        }
    });

    window['addEventListener'](_0xG(0x10a), _0xH);
    window['addEventListener']('load', _0xH);
});

function _0xH() {
    const _0xG = _0x221a, _0xhash = window['location']['hash'];
    const _0xmap = {
        '#/EJ': ['EJ', _0xEJ], '#/FUMA': ['FUMA', _0xFU], '#/K': ['K', _0xK],
        '#/NICO': ['NICO', _0xNI], '#/YUMA': ['YUMA', _0xYU], '#/JO': ['JO', _0xJO],
        '#/HARUA': ['HARUA', _0xHA], '#/TAKI': ['TAKI', _0xTA], '#/MAKI': ['MAKI', _0xMA]
    };
    const _0xres = _0xmap[_0xhash] || ['andTEAM', _0xaT];
    _0xS(_0xres[0x0]); _0xres[0x1]();
}

function _0xS(_0xsec) {
    const _0xG = _0x221a;
    const _0xcl = document['querySelector']('.' + _0xG(0x106));
    if (_0xcl) _0xcl['classList']['remove']('active');
    
    ['andTEAM', 'EJ', 'FUMA', 'K', 'NICO', 'YUMA', 'JO', 'HARUA', 'TAKI', 'MAKI']['forEach'](_0xid => {
        const _0xels = document['getElementById'](_0xid + 'Section');
        if (_0xels) _0xels['style']['display'] = (_0xid === _0xsec) ? 'block' : 'none';
    });
}

function _0x55d1() {
    const _0xarr = ['DOMContentLoaded', 'menuToggle', 'sidebar', 'container', 'sidebar-overlay', 'sidebar-open', 'hashchange', '1111', '2222', '3333', '4444'];
    _0x55d1 = function() { return _0xarr; };
    return _0x55d1();
}