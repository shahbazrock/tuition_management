import { url_addCenter, url_addCourse, url_addDiscount, url_addInventory, url_addPackage, url_attendence, url_centerKpi, url_centers, url_courses, url_dicounts, url_editCenter, url_editCourse, url_editDiscount, url_editInventory, url_editPackage, url_editStudent, url_hq, url_inventories, url_login, url_packageAddOthers, url_packageEditOthers, url_packageOthers, url_packages, url_registerStudent, url_student, url_viewCourse } from './components/functions/pageUrls'
import { Login, HqMain, Centers, AddCenter, Courses, AddCourse, EditCourse, EditCenter, Student, RegisterStudent, Attendence, ViewCourse, CenterKpi, Packages, AddPackage, EditPackage, Discounts, AddDiscount, EditDiscount, Others, AddOthers, EditOthers, Inventories, AddInventory, EditInventory } from './pages'
export const routes = [
    { element: <Login />, path: '/' },
    { element: <Login />, path: url_login },
    { element: <HqMain />, path: url_hq },
    { element: <Centers />, path: url_centers },
    { element: <AddCenter />, path: url_addCenter },
    { element: <EditCenter />, path: url_editCenter },
    { element: <Courses />, path: url_courses },
    { element: <AddCourse />, path: url_addCourse },
    { element: <EditCourse />, path: url_editCourse },
    { element: <ViewCourse />, path: url_viewCourse },
    { element: <CenterKpi />, path: url_centerKpi },
    { element: <Packages />, path: url_packages },
    { element: <AddPackage />, path: url_addPackage },
    { element: <EditPackage />, path: url_editPackage },
    { element: <Discounts />, path: url_dicounts },
    { element: <AddDiscount />, path: url_addDiscount },
    { element: <EditDiscount />, path: url_editDiscount },
    { element: <Others />, path: url_packageOthers },
    { element: <AddOthers />, path: url_packageAddOthers },
    { element: <EditOthers />, path: url_packageEditOthers },
    { element: <Inventories />, path: url_inventories },
    { element: <AddInventory />, path: url_addInventory },
    { element: <EditInventory />, path: url_editInventory },
    { element: <Student />, path: url_student },
    { element: <RegisterStudent />, path: url_registerStudent },
    { element: <RegisterStudent />, path: url_editStudent },
    { element: <Attendence />, path: url_attendence },
]