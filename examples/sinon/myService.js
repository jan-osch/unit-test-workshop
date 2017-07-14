exports.User = class User {

    constructor(workerCategory) {
        this.workerCategory = workerCategory
    }

    setFirstName(fistName) {
        this.firstName = fistName
    }

    setSecondName(secondName) {
        this.secondName = secondName
    }
}

function delay(milliSeconds) {
    return new Promise(resolve => setTimeout(resolve, milliSeconds))
}

// Inny przykład

const WIDGET_NAME = {
    home: 'Dashboard Home',
    bav: 'Bav Super Dashboard',
    social: 'Facebook & Instagram',
}

exports.DashboardService = class DashboardService {

    static prepareUser(user, params) {
        if (params.name) {
            const [fistName, secondName] = params.name.split(' ')
            user.setFirstName(fistName)
            user.setSecondName(secondName)
        }
    }


    static async createWidget(widgetType) {
        await delay(2000)
        return { widgetType, config: 'config' }
    }

    static async createDashboard(dashboardType, widgets) {
        const createdWidgets = []

        for (const widgetType of widgets) {
            createdWidgets.push(await DashboardService.createWidget(widgetType))
        }

        return {
            name: WIDGET_NAME[dashboardType],
            widgets: createdWidgets,
        }
    }


}

