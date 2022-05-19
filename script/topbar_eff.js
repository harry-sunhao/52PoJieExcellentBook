function btn_eff() {
    if ($("topbar.btn.icon_homepage").onmousemove == true) {
        $(".topbar.btn.icon_homepage").css({'animation': 'btn_anim 0.5s'});
        $(".topbar.btn>a").css({'animation': 'btn_anim_hover 0.5s'});
    }
    if ($("topbar.btn.icon_homepage").onmous == true) {
        $(".topbar.btn.icon_homepage").css({'animation': 'btn_anim 0.5s'});
        $(".topbar.btn>a").css({'animation': 'btn_anim_hover_rewind 0.5s'});
    }
}