function _moneyFormat(v=0, r) 
{
    r = r === undefined ? 'Rp ' : r;
    return r + v.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}