/**
 * @file Add open in new tab in internship search page.
 * @author Winston Jašaragic
 */

const children = Array.from(document.getElementById('result-lijst').getElementsByTagName('a'));
children.forEach((child) => {
child.href='/Zoeken/Home/Details?LeerbedrijfId=' + child.getAttribute('data-leerbedrijfid');
});