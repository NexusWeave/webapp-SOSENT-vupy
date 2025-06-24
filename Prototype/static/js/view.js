//  Prototype | View.js
function navigationMenu()
{
    const nav = model.nav;

    html = /*HTML*/`<nav class = "${nav.cls}">`;

    for (let i = 0; i < nav.pages.length; i++)
    {
        const page = nav.pages[i];
        if (page.type === "button")
        {
            html += /*HTML*/ `<button class='nav-item bg-brown' onclick="navigateView('${nav.pages[i].name}')">${nav.pages[i].title}</button>`;
        }
        else if (page.type === "link")
        {
            html += /*HTML*/ `<a href="${nav.pages[i].href}" target="_blank" rel="external"><div class="${page.cls}">${nav.pages[i].title}</div></a>`;
        }
    }
    html += /*HTML*/ `</nav>`;

    return html;
}

function header()
{
    const logo = model.data.media.images.logo[0];

    let html = /*HTML*/`
        <header class="${model.header.cls}">
            <div class="flex-row-align-items-center">
                <div class="flex-wrap-row-justify-flex-start ">
                    <img class="${logo.cls}" alt="${logo.alt}" src="${logo.src}" />
                </div>
                <div class="flex-column-align-items-center">
                    <h1 class="h1">${model.header.title}</h1>
                    <h4>${model.header.description}</h4>
                </div>
                <div></div>
            </div>
        
        ${navigationMenu()}
    </header>`;

    return html;
}

function footerView()
{
    const footer = model.footer;
    const nav = footer.nav;

    let html = /*HTML*/ `
    <footer class="${footer.cls}">
        <nav class="footer-container flex-wrap-row-justify-flex-end">
            ${footerNav(nav)}
        </nav>
    
    </footer>`;

    return html;
}
function footerNav(links)
{
    let html = '';

    for (let i = 0; i < links.length; i++)
    {
        const link = links[i];
        html += /*HTML*/ `
        
            <a href="${link.href}" target="_blank" rel="external">
                <div class="${link.cls}">${link.name}</div>
            </a>`;
    }
    return html;
}