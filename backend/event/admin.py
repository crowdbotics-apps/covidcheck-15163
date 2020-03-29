from django.contrib import admin
from .models import (
    Vendor,
    Sponsor,
    Presenter,
    VendorDetail,
    Schedule,
    Category,
    MySchedule,
    Faq,
    Favorites,
    Location,
)

admin.site.register(MySchedule)
admin.site.register(Category)
admin.site.register(Location)
admin.site.register(Presenter)
admin.site.register(Vendor)
admin.site.register(Faq)
admin.site.register(Schedule)
admin.site.register(Sponsor)
admin.site.register(VendorDetail)
admin.site.register(Favorites)

# Register your models here.
