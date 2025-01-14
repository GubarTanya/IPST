//Входные данные:
    interface SourceData  {
        user_id: string,
        full_name: string,
        contact: {
            phone: string,
            email: string,
        },
        address: {
            city: string,
            zip: string,
        },
        is_active: boolean,
    }
//Выходные данные:
    interface TargetData  {
        id: string,
        name: string,
        phone: string,
        email: string,
        location: string,
        status: string,
    }

    function transform(sourse: SourceData): TargetData {
        const target: TargetData= {
            id: sourse.user_id,
            name: sourse.full_name,
            phone: sourse.contact.phone,
            email: sourse.contact.email,
            location: source.address.city.concat(", ", source.address.zip),
            status: sourse.is_active ? "active)" : "passive(",
        };
        return target
    }

const source: SourceData = {
    user_id: "123",
    full_name: "John Doe",
    contact: {
        phone: "+123456789",
        email: "john.doe@example.com",
    },
    address: {
        city: "New York",
        zip: "10001",
    },
    is_active: true,
};

const target = transform(source);
console.log(target);