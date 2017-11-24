module.exports = {
    adsListItemTap: function(e) {
        if ('listitem' in e.currentTarget.dataset) {
            const id = e.currentTarget.dataset.listitem;
            wx.navigateTo({
                url: '/pages/detail/index?id=' + id
            })
        }
    }
}