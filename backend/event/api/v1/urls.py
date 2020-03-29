from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    VendorViewSet,
    SponsorViewSet,
    PresenterViewSet,
    VendorDetailViewSet,
    ScheduleViewSet,
    CategoryViewSet,
    MyScheduleViewSet,
    FaqViewSet,
    FavoritesViewSet,
    LocationViewSet,
)

router = DefaultRouter()
router.register("myschedule", MyScheduleViewSet)
router.register("category", CategoryViewSet)
router.register("location", LocationViewSet)
router.register("presenter", PresenterViewSet)
router.register("vendor", VendorViewSet)
router.register("faq", FaqViewSet)
router.register("schedule", ScheduleViewSet)
router.register("sponsor", SponsorViewSet)
router.register("vendordetail", VendorDetailViewSet)
router.register("favorites", FavoritesViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
